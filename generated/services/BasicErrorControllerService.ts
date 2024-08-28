/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ModelAndView } from '../models/ModelAndView';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class BasicErrorControllerService {

    /**
     * error
     * @returns any OK
     * @throws ApiError
     */
    public static errorUsingGet(): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/question/error',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * error
     * @returns any OK
     * @throws ApiError
     */
    public static errorUsingHead(): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'HEAD',
            url: '/api/question/error',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * error
     * @returns any OK
     * @throws ApiError
     */
    public static errorUsingPost(): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/question/error',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * error
     * @returns any OK
     * @throws ApiError
     */
    public static errorUsingPut(): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/question/error',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * error
     * @returns any OK
     * @throws ApiError
     */
    public static errorUsingDelete(): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/question/error',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * error
     * @returns any OK
     * @throws ApiError
     */
    public static errorUsingOptions(): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'OPTIONS',
            url: '/api/question/error',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * error
     * @returns any OK
     * @throws ApiError
     */
    public static errorUsingPatch(): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/question/error',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * errorHtml
     * @returns ModelAndView OK
     * @throws ApiError
     */
    public static errorHtmlUsingGet(): CancelablePromise<ModelAndView> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/user/error',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * errorHtml
     * @returns ModelAndView OK
     * @throws ApiError
     */
    public static errorHtmlUsingHead(): CancelablePromise<ModelAndView> {
        return __request(OpenAPI, {
            method: 'HEAD',
            url: '/api/user/error',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * errorHtml
     * @returns ModelAndView OK
     * @returns any Created
     * @throws ApiError
     */
    public static errorHtmlUsingPost(): CancelablePromise<ModelAndView | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/user/error',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * errorHtml
     * @returns ModelAndView OK
     * @returns any Created
     * @throws ApiError
     */
    public static errorHtmlUsingPut(): CancelablePromise<ModelAndView | any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/user/error',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * errorHtml
     * @returns ModelAndView OK
     * @throws ApiError
     */
    public static errorHtmlUsingDelete(): CancelablePromise<ModelAndView> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/user/error',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * errorHtml
     * @returns ModelAndView OK
     * @throws ApiError
     */
    public static errorHtmlUsingOptions(): CancelablePromise<ModelAndView> {
        return __request(OpenAPI, {
            method: 'OPTIONS',
            url: '/api/user/error',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * errorHtml
     * @returns ModelAndView OK
     * @throws ApiError
     */
    public static errorHtmlUsingPatch(): CancelablePromise<ModelAndView> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/user/error',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * errorHtml
     * @returns ModelAndView OK
     * @throws ApiError
     */
    public static errorHtmlUsingGet1(): CancelablePromise<ModelAndView> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/judge/error',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * errorHtml
     * @returns ModelAndView OK
     * @throws ApiError
     */
    public static errorHtmlUsingHead1(): CancelablePromise<ModelAndView> {
        return __request(OpenAPI, {
            method: 'HEAD',
            url: '/api/judge/error',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * errorHtml
     * @returns ModelAndView OK
     * @returns any Created
     * @throws ApiError
     */
    public static errorHtmlUsingPost1(): CancelablePromise<ModelAndView | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/judge/error',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * errorHtml
     * @returns ModelAndView OK
     * @returns any Created
     * @throws ApiError
     */
    public static errorHtmlUsingPut1(): CancelablePromise<ModelAndView | any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/judge/error',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * errorHtml
     * @returns ModelAndView OK
     * @throws ApiError
     */
    public static errorHtmlUsingDelete1(): CancelablePromise<ModelAndView> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/judge/error',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * errorHtml
     * @returns ModelAndView OK
     * @throws ApiError
     */
    public static errorHtmlUsingOptions1(): CancelablePromise<ModelAndView> {
        return __request(OpenAPI, {
            method: 'OPTIONS',
            url: '/api/judge/error',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * errorHtml
     * @returns ModelAndView OK
     * @throws ApiError
     */
    public static errorHtmlUsingPatch1(): CancelablePromise<ModelAndView> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/judge/error',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

}
