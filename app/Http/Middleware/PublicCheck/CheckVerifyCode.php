<?php

namespace App\Http\Middleware\PublicCheck;

use Closure;
use Illuminate\Http\Request;

class CheckVerifyCode
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        $verifyCodeValidate="/[\d]/";
        $phonevalidaty="/(0|\+98)?([ ]|,|-|[()]){0,2}9[1|2|3|4]([ ]|,|-|[()]){0,2}(?:[0-9]([ ]|,|-|[()]){0,2}){8}/";
        $verifyGroupId="/[\d]/";


        $verifyCode=$request->input('verifyCode');
        $phone=$request->input('phone');
        $busineeType=$request->input('businessCategoryId');


        if (!(preg_match($phonevalidaty,$phone))){
            return response()->json([
                'message'=>' ! شماره همراه وارد شده صحیح نمی باشد',
                'Success'=>0,
                'Status Code'=>http_response_code()
            ]);
        }else if(!(preg_match($verifyCodeValidate,$verifyCode))){

            return response()->json([
                'message'=>' ! فرمت کد اعتبار سنجی صحیح نمی باشد',
                'Success'=>0,
                'Status Code'=>http_response_code()
            ]);
        }else if(!(preg_match($verifyGroupId,$busineeType))){
            return response()->json([
                'message'=>' ! مشکل در انتخاب نوع مسب و کار',
                'Success'=>0,
                'Status Code'=>http_response_code()
            ]);
        }
        else{
            return $next($request);
        }

    }
}
