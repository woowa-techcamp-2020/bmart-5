import { Router } from 'express';
import { ProductController } from '../controllers';

const router = Router();

/**
 * @api {post} /api/product 상품 생성
 * @apiName Create
 * @apiGroup Product
 *
 * @apiParam {String} name 상품 제목
 * @apiParam {Number} price 가격
 * @apiParam {String} content 소개 내용
 * @apiParam {Number} discount 할인율
 * @apiParam {Number} subCategoryId 하위카테고리 아이디
 *
 * @apiSuccess {Number} id 상품 아이디
 * @apiSuccess {String} name 상품 제목
 * @apiSuccess {Number} price 가격
 * @apiSuccess {String} content 소개 내용
 * @apiSuccess {Number} discount 할인율
 * @apiSuccess {Number} subCategoryId 하위카테고리 아이디
 * @apiSuccess {Date} outOfStockAt 품절 날짜 (null)
 * @apiSuccess {Date} createdAt 생성 날짜
 * @apiSuccess {Date} updatedAt 수정 날짜
 * @apiSuccess {Date} deletedAt 삭제 날짜
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 201 CREATED
 *     {
 *       "status": 201,
 *       "message": "product created: ${product.name}"
 *       "result": {
 *                      id: 10,
 *                      name: "허니 바나나 2입",
 *                      price: 1390,
 *                      content: "허니 바나나 소개 내용",
 *                      discount: 10,
 *                      subCategoryId: 2,
 *                      outOfStockAt: null
 *                      createdAt: 2020.08.05 13:04:30
 *                      updatedAt: 2020.08.05 13:04:30
 *                      deletedAt: null
 *                 }
 *     }
 *
 * @apiError INTERNAL_SERVER_ERROR default error.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 INTERNAL_SERVER_ERROR
 *     {
 *        "status": 500,
 *        "message": "error.message"
 *        "result": {
 *                      "error": "error.stack"
 *                  }
 *     }
 */
router.post('/', ProductController.create);

/**
 * @api {get} /api/product/:id 해당 아이디 상품 조회
 * @apiName FindById
 * @apiGroup Product
 *
 * @apiParam {Number} id 상품 아이디
 *
 * @apiSuccess {Number} id 상품 아이디
 * @apiSuccess {String} name 상품 제목
 * @apiSuccess {Number} price 가격
 * @apiSuccess {String} content 소개 내용
 * @apiSuccess {Number} discount 할인율
 * @apiSuccess {Number} subCategoryId 하위카테고리 아이디
 * @apiSuccess {Date} outOfStockAt 품절 날짜 (null)
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "status": 200,
 *       "message": "find product by id: ${paramId}"
 *       "result": {
 *                      id: 10,
 *                      name: "허니 바나나 2입",
 *                      price: 1390,
 *                      content: "허니 바나나 소개 내용",
 *                      discount: 10,
 *                      subCategoryId: 2,
 *                      outOfStockAt: null
 *                 }
 *     }
 *
 * @apiError INTERNAL_SERVER_ERROR default error.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 INTERNAL_SERVER_ERROR
 *     {
 *        "status": 500,
 *        "message": "error.message"
 *        "result": {
 *                      "error": "error.stack"
 *                  }
 *     }
 */
router.get('/:id', ProductController.findById);

/**
 * @api {put} /api/product/:id 상품 수정
 * @apiName Update
 * @apiGroup Product
 *
 * @apiParam {String} name 상품 제목
 * @apiParam {Number} price 가격
 * @apiParam {String} content 소개 내용
 * @apiParam {Number} discount 할인율
 * @apiParam {Number} subCategoryId 하위카테고리 아이디
 * @apiParam {Date} outOfStockAt 품절 날짜
 * @apiParam {Date} deletedAt 삭제 날짜
 *
 * @apiSuccess {Number} id 상품 아이디
 * @apiSuccess {String} name 상품 제목
 * @apiSuccess {Number} price 가격
 * @apiSuccess {String} content 소개 내용
 * @apiSuccess {Number} discount 할인율
 * @apiSuccess {Number} subCategoryId 하위카테고리 아이디
 * @apiSuccess {Date} outOfStockAt 품절 날짜 (null)
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "status": 200,
 *       "message": "product updated: ${paramId}"
 *       "result": {
 *                      id: 10,
 *                      name: "허니 바나나 2입",
 *                      price: 1390,
 *                      content: "허니 바나나 소개 내용",
 *                      discount: 10,
 *                      subCategoryId: 2,
 *                      outOfStockAt: null
 *                 }
 *     }
 *
 * @apiError INTERNAL_SERVER_ERROR default error.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 INTERNAL_SERVER_ERROR
 *     {
 *        "status": 500,
 *        "message": "error.message"
 *        "result": {
 *                      "error": "error.stack"
 *                  }
 *     }
 */
router.put('/:id', ProductController.update);

/**
 * @api {delete} /api/product/:id 상품 삭제
 * @apiName Delete
 * @apiGroup Product
 *
 * @apiParam {Number} id 상품 아이디
 *
 * @apiSuccess {Number} id 상품 아이디
 * @apiSuccess {String} name 상품 제목
 * @apiSuccess {Number} price 가격
 * @apiSuccess {String} content 소개 내용
 * @apiSuccess {Number} discount 할인율
 * @apiSuccess {Number} subCategoryId 하위카테고리 아이디
 * @apiSuccess {Date} outOfStockAt 품절 날짜 (null)
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "status": 200,
 *       "message": "product soft deleted: ${paramId}"
 *       "result": {
 *                      id: 10,
 *                      name: "허니 바나나 2입",
 *                      price: 1390,
 *                      content: "허니 바나나 소개 내용",
 *                      discount: 10,
 *                      subCategoryId: 2,
 *                      outOfStockAt: null
 *                 }
 *     }
 *
 * @apiError INTERNAL_SERVER_ERROR default error.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 INTERNAL_SERVER_ERROR
 *     {
 *        "status": 500,
 *        "message": "error.message"
 *        "result": {
 *                      "error": "error.stack"
 *                  }
 *     }
 */
router.delete('/:id', ProductController.softDelete);

/**
 * @api {patch} /api/product/out/:id 상품 품절 상태
 * @apiName SetOutOfStock
 * @apiGroup Product
 *
 * @apiParam {Number} id 상품 아이디
 *
 * @apiSuccess {Number} id 상품 아이디
 * @apiSuccess {String} name 상품 제목
 * @apiSuccess {Number} price 가격
 * @apiSuccess {String} content 소개 내용
 * @apiSuccess {Number} discount 할인율
 * @apiSuccess {Number} subCategoryId 하위카테고리 아이디
 * @apiSuccess {Date} outOfStockAt 품절 날짜 (not null)
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "status": 200,
 *       "message": "product out of stock: ${paramId}"
 *       "result": {
 *                      id: 10,
 *                      name: "허니 바나나 2입",
 *                      price: 1390,
 *                      content: "허니 바나나 소개 내용",
 *                      discount: 10,
 *                      subCategoryId: 2,
 *                      outOfStockAt: 2020.08.05.13:10:40
 *                 }
 *     }
 *
 * @apiError INTERNAL_SERVER_ERROR default error.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 INTERNAL_SERVER_ERROR
 *     {
 *        "status": 500,
 *        "message": "error.message"
 *        "result": {
 *                      "error": "error.stack"
 *                  }
 *     }
 */
router.patch('/out/:id', ProductController.setOutOfStock);

/**
 * @api {get} /api/product/latest/:limit 최신 상품 조회
 * @apiName FindLatestProduct
 * @apiGroup Product
 *
 * @apiParam {Number} limit 개수 제한
 *
 * @apiSuccess {Number} id 상품 아이디
 * @apiSuccess {String} name 상품 제목
 * @apiSuccess {Number} price 가격
 * @apiSuccess {String} content 소개 내용
 * @apiSuccess {Number} discount 할인율
 * @apiSuccess {Number} subCategoryId 하위카테고리 아이디
 * @apiSuccess {Date} outOfStockAt 품절 날짜 (null)
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "status": 200,
 *       "message": "find product list with limit: ${paramLimit}"
 *       "result": {
 *                      id: 10,
 *                      name: "허니 바나나 2입",
 *                      price: 1390,
 *                      content: "허니 바나나 소개 내용",
 *                      discount: 10,
 *                      subCategoryId: 2,
 *                      outOfStockAt: null
 *                 }
 *     }
 *
 * @apiError INTERNAL_SERVER_ERROR default error.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 INTERNAL_SERVER_ERROR
 *     {
 *        "status": 500,
 *        "message": "error.message"
 *        "result": {
 *                      "error": "error.stack"
 *                  }
 *     }
 */
router.get('/latest/:limit', ProductController.findLatest);

/**
 * @api {get} /api/product/sub/:subCategoryId/:limit 해당 하위 카테고리 상품
 * @apiName FindBySubCategoryId
 * @apiGroup Product
 *
 * @apiParam {Number} subCategoryId 하위 카테고리 아이디
 * @apiParam {Number} limit 개수 제한
 *
 * @apiSuccess {Number} id 상품 아이디
 * @apiSuccess {String} name 상품 제목
 * @apiSuccess {Number} price 가격
 * @apiSuccess {String} content 소개 내용
 * @apiSuccess {Number} discount 할인율
 * @apiSuccess {Number} subCategoryId 하위카테고리 아이디
 * @apiSuccess {Date} outOfStockAt 품절 날짜 (null)
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "status": 200,
 *       "message": "find products by sub-category: ${paramSubCategoryId}"
 *       "result": {
 *                      id: 10,
 *                      name: "허니 바나나 2입",
 *                      price: 1390,
 *                      content: "허니 바나나 소개 내용",
 *                      discount: 10,
 *                      subCategoryId: 2,
 *                      outOfStockAt: null
 *                 }
 *     }
 *
 * @apiError INTERNAL_SERVER_ERROR default error.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 INTERNAL_SERVER_ERROR
 *     {
 *        "status": 500,
 *        "message": "error.message"
 *        "result": {
 *                      "error": "error.stack"
 *                  }
 *     }
 */
router.get('/sub/:subCategoryId/:limit', ProductController.findBySubCategoryId);

export default router;
