import { describe, expect, it } from 'vitest'
import { getVeganFoods, getVegetarianFoods } from '../src/index'

describe('should', () => {
  it('exported', () => {
    expect(1).toEqual(1)
  })

  it('getVegetarianFoods should return only vegetarian foods', () => {
    const foods = [
      { name: '苹果', calories: 52, isVegetarian: true, isVegan: true },
      { name: '鸡肉', calories: 239, isVegetarian: false, isVegan: false },
    ]
    const result = getVegetarianFoods(foods)
    expect(result).toEqual([{ name: '苹果', calories: 52, isVegetarian: true, isVegan: true }])
  })
})
describe('getVeganFoods', () => {
  it('should return all vegan foods', () => {
    const foods = [
      { name: '苹果', calories: 52, isVegetarian: true, isVegan: true },
      { name: '鸡肉', calories: 239, isVegetarian: false, isVegan: false },
      { name: '鱼', calories: 100, isVegetarian: false, isVegan: true },
    ]
    const result = getVeganFoods(foods)
    expect(result).toEqual([{ name: '鱼', calories: 100, isVegetarian: false, isVegan: true }])
  })
})
