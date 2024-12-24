import type { Food } from './index.d'

/**
 * 食物数据
 */
const foods: Food[] = [
  { name: '苹果', calories: 52, isVegetarian: true, isVegan: true },
  { name: '鸡肉', calories: 239, isVegetarian: false, isVegan: false },
]

/**
 * 获取所有素食食品
 * @param foods 食物数据
 * @returns 素食食品
 */
function getVegetarianFoods(foods: Food[]): Food[] {
  return foods.filter(food => food.isVegetarian)
}

/**
 * 获取所有纯素食品
 * @param foods 食物数据
 * @returns 纯素食品
 */
function getVeganFoods(foods: Food[]): Food[] {
  return foods.filter(food => food.isVegan && !food.isVegetarian)
}

export { foods, getVeganFoods, getVegetarianFoods }
