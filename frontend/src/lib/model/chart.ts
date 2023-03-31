/**
 * One thing I would change if I had the time:
 * I'm currently using the BE model for chart data & threads, without transforming it at all
 * Being so tightly-coupled leaves us to the whims of BE, which imo isn't great for stability
 * In an ideal world, FE is just a consumer which could handle any BE service, and vice versa
 */
export type ChartDataReponse = ChartData[]

export type ChartData = Record<ChartDataFeature, number> & {
  country: ChartCountry
}

export type ChartCountry = 'FR' | 'GB' | 'BE' | 'DE' | 'ES' | 'IT'

export const validChartDataFeatures = ['hotdog', 'burger', 'sandwich', 'kebab', 'fries', 'donut'] as const
export type ChartDataFeature = typeof validChartDataFeatures[number]

export interface ChartDataPoint {
  feature: ChartDataFeature
  country: ChartCountry
}

export function assertIsChartDataFeature(feature: string): asserts feature is ChartDataFeature {
  if (['hotdog', 'burger', 'sandwich', 'kebab', 'fries', 'donut'].includes(feature)) return
  console.error('Type issue, feature not valid')
}