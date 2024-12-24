/**
 * 食物数据
 * @property {string} name - 食物名称
 * @property {number} calories - 食物卡路里
 * @property {boolean} isVegetarian - 是否是素食
 * @property {boolean} isVegan - 是否是纯素
 */
declare interface Food {
  name: string
  calories: number
  isVegetarian: boolean
  isVegan: boolean
}

export { Food }
