export function generateRandomMetrics() {
  const metricTitles = [
    'Page Views',
    'Unique Visitors',
    'Conversions',
    'Bounce Rate',
    'Session Duration',
    'New Users',
    'Revenue',
    'Click-through Rate',
    'Time on Page',
    'Return Visitors',
    'Goal Completions',
    'Exit Rate',
    'Pages per Session',
    'Social Shares',
    'Email Signups',
  ]

  const metrics = []
  const usedTitles = new Set()

  for (let i = 0; i < 12; i++) {
    let title
    do {
      title = metricTitles[Math.floor(Math.random() * metricTitles.length)]
    } while (usedTitles.has(title))

    usedTitles.add(title)
    const value = Math.floor(Math.random() * 10000)
    metrics.push([title, value])
  }

  return metrics
}
