export default function getColumn(index: number) {
  if (index > 35) { return 6 }
  if (index > 29) { return 5 }
  if (index > 23) { return 4 }
  if (index > 17) { return 3 }
  if (index > 11) { return 2 }
  if (index > 5) { return 1 }

  return 0
}