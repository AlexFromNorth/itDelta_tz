import { Comment } from "../types/types"

export const searchById = (data: Comment[], id: number) => {
    return data.filter(el => el.id !== id);
  }
  

// export const updateElementUtil = (data:Element[], updateElement: Element) => {
//     return data.map(el => el.id === updateElement.id ? updateElement : el)
// }