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