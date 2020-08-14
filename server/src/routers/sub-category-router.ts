import { Router } from 'express';
import { SubCategoryController } from '../controllers';

const router = Router();

/**
 * @api {post} /api/sub_category 하위 카테고리 생성
 * @apiName Create
 * @apiGroup SubCategory
 *
 * @apiParam {String} name 하위 카테고리 제목
 * @apiParam {Number} orderWeight 순서 가중치
 * @apiParam {Number} categoryId 카테고리 아이디
 *
 * @apiSuccess {Number} ID 하위 카테고리 아이디
 * @apiSuccess {String} name 하위 카테고리 제목
 * @apiSuccess {Number} orderWeight 순서 가중치
 * @apiSuccess {Number} categoryId 카테고리 아이디
 * @apiSuccess {Date} createdAt 생성 날짜
 * @apiSuccess {Date} updatedAt 수정 날짜
 * @apiSuccess {Date} deletedAt 삭제 날짜
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 201 CREATED
 *     {
 *       "status": 201,
 *       "message": "sub category created: ${subCategory.name}"
 *       "result": {
 *                      id: 3,
 *                      name: "과자 초콜릿",
 *                      orderWeight: 1000,
 *                      categoryId: 2,
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
router.post('/', SubCategoryController.create);

/**
 * @api {get} /api/sub_category/:limit 하위 카테고리 리스트 조회
 * @apiName FindAll
 * @apiGroup SubCategory
 *
 * @apiParam {Number} limit 개수 제한
 *
 * @apiSuccess {Number} id 하위 카테고리 아이디
 * @apiSuccess {String} name 하위 카테고리 제목
 * @apiSuccess {Number} orderWeight 순서 가중치
 * @apiSuccess {Number} categoryId 카테고리 아이디
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "status": 200,
 *       "message": "find sub category list with limit: ${paramLimit}"
 *       "result": {
 *                      id: 3,
 *                      name: "과자 초콜릿",
 *                      orderWeight: 1000,
 *                      categoryId: 2
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
router.get('/:limit', SubCategoryController.findAll);

/**
 * @api {get} /api/sub_category/cat/:categoryId/:limit 카테고리 하위 카테고리 리스트 조회
 * @apiName FindByCategoryId
 * @apiGroup SubCategory
 *
 * @apiParam {Number} categoryId 카테고리 아이디
 * @apiParam {Number} limit 개수 제한
 *
 * @apiSuccess {Number} id 하위 카테고리 아이디
 * @apiSuccess {String} name 하위 카테고리 제목
 * @apiSuccess {Number} orderWeight 순서 가중치
 * @apiSuccess {Number} categoryId 카테고리 아이디
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "status": 200,
 *       "message": "find sub category list by categoryId: ${paramCategoryId}"
 *       "result": {
 *                      id: 3,
 *                      name: "과자 초콜릿",
 *                      orderWeight: 1000,
 *                      categoryId: 2
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
router.get('/cat/:categoryId/:limit', SubCategoryController.findByCategoryId);

/**
 * @api {put} /api/sub_category/:id 하위 카테고리 수정
 * @apiName Update
 * @apiGroup SubCategory
 *
 * @apiParam {String} name 하위 카테고리 제목
 * @apiParam {Number} orderWeight 순서 가중치
 *
 * @apiSuccess {Number} completed 성공 여부
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "status": 200,
 *       "message": "sub category updated: ${paramId}"
 *       "result": {
 *                      completed: 1
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
router.put('/:id', SubCategoryController.update);

/**
 * @api {delete} /api/sub_category/:id 하위 카테고리 삭제
 * @apiName Delete
 * @apiGroup SubCategory
 *
 * @apiParam {Number} id 하위 카테고리 아이디
 *
 * @apiSuccess {Number} completed 성공 여부
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "status": 200,
 *       "message": "sub category soft deleted: ${paramId}"
 *       "result": {
 *                      completed: 1
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
router.delete('/:id', SubCategoryController.softDelete);

export default router;
