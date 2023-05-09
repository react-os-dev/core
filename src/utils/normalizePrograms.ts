import { programType } from "../types/core"
import getColumn from "./getColumn"

export default function normalizePrograms(data: programType[]) {
  return data.map((item, index) => ({
    ...item,
    x: getColumn(index),
    y: 0
  }))
}