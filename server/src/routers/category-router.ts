import { Router } from 'express';
import { CategoryController } from '../controllers';

const router = Router();

/**
 * @api {post} /api/category 카테고리 생성
 * @apiName Create
 * @apiGroup Category
 *
 * @apiParam {String} name 카테고리 제목
 * @apiParam {Number} orderWeight 순서 가중치
 *
 * @apiSuccess {Number} ID 카테고리 아이디
 * @apiSuccess {String} name 카테고리 제목
 * @apiSuccess {Number} orderWeight 순서 가중치
 * @apiSuccess {Date} createdAt 생성 날짜
 * @apiSuccess {Date} updatedAt 수정 날짜
 * @apiSuccess {Date} deletedAt 삭제 날짜
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 201 CREATED
 *     {
 *       "status": 201,
 *       "message": "category created: ${category.name}"
 *       "result": {
 *                      id: 3,
 *                      name: "과자 초콜릿",
 *                      orderWeight: 1000,
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
router.post('/', CategoryController.create);

/**
 * @api {get} /api/category/:limit 카테고리 리스트 조회
 * @apiName FindAll
 * @apiGroup Category
 *
 * @apiParam {Number} limit 개수 제한
 *
 * @apiSuccess {Number} id 카테고리 아이디
 * @apiSuccess {String} name 카테고리 제목
 * @apiSuccess {Number} orderWeight 순서 가중치
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "status": 200,
 *       "message": "find category list with limit: ${paramLimit}"
 *       "result": {
 *                      id: 3,
 *                      name: "과자 초콜릿",
 *                      orderWeight: 1000
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
router.get('/:limit', CategoryController.findAll);

/**
 * @api {put} /api/category/:id 카테고리 수정
 * @apiName Update
 * @apiGroup Category
 *
 * @apiParam {String} name 카테고리 제목
 * @apiParam {Number} orderWeight 순서 가중치
 *
 * @apiSuccess {Number} completed 성공 여부
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "status": 200,
 *       "message": "category updated id: ${paramId}"
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
router.put('/:id', CategoryController.update);

/**
 * @api {delete} /api/category/:id 카테고리 삭제
 * @apiName Delete
 * @apiGroup Category
 *
 * @apiParam {Number} id 카테고리 아이디
 *
 * @apiSuccess {Number} completed 성공 여부
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "status": 200,
 *       "message": "category soft deleted id: ${paramId}"
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
router.delete('/:id', CategoryController.softDelete);

export default router;
