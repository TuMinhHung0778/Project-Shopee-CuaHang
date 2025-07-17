import http from 'src/utils/http'
import type { Category } from 'src/types/category.type'
import type { SuccesResponse } from 'src/types/utils.type'

const URL = 'categories'

const categoryApi = {
  getCategories() {
    return http.get<SuccesResponse<Category[]>>(URL)
  }
}

export default categoryApi
