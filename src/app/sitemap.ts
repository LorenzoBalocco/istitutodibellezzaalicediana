import type { MetadataRoute } from "next"
import fs from "fs"
import path from "path"

const BASE_URL = "https://istitutodibellezzaalicediana.com"

/**
 * Scansiona ricorsivamente `src/app/` e restituisce tutti i segmenti URL
 * corrispondenti ai file `page.tsx` trovati.
 *
 * Regole di esclusione:
 * - Route groups `(parentesi)` → rimossi dal path (non creano segmento URL)
 * - Segmenti `[dinamici]` → ignorati
 * - Cartella `api/` → ignorata
 */
function discoverRoutes(dir: string, base = ""): string[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  const routes: string[] = []

  for (const entry of entries) {
    if (!entry.isDirectory()) continue

    const name = entry.name

    // Escludi API e cartelle private (_)
    if (name === "api" || name.startsWith("_")) continue

    // Escludi segmenti dinamici [slug]
    if (name.startsWith("[")) continue

    // Route groups (parentesi) non aggiungono segmento URL
    const segment = name.startsWith("(") ? base : `${base}/${name}`

    const fullPath = path.join(dir, name)

    // Se questa cartella contiene un page.tsx, è una route pubblica
    const hasPage = fs.existsSync(path.join(fullPath, "page.tsx"))
    if (hasPage) {
      routes.push(segment || "/")
    }

    // Scendi in profondità
    routes.push(...discoverRoutes(fullPath, segment))
  }

  return routes
}

export default function sitemap(): MetadataRoute.Sitemap {
  const appDir = path.join(process.cwd(), "src", "app")

  // Homepage
  const routes: string[] = ["/"]

  // Tutte le altre pagine scoperte dinamicamente
  routes.push(...discoverRoutes(appDir))

  // Rimuovi duplicati
  const uniqueRoutes = [...new Set(routes)]

  return uniqueRoutes.map((route) => {
    const depth = route === "/" ? 0 : route.split("/").filter(Boolean).length

    const priority = depth === 0 ? 1 : depth === 1 ? 0.8 : 0.6
    const changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] =
      depth === 0 ? "monthly" : "monthly"

    return {
      url: `${BASE_URL}${route}`,
      lastModified: new Date(),
      changeFrequency,
      priority,
    }
  })
}
