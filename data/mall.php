<?php
/**
* 向首页提供必需的数据，包括轮播广告、新品专区、热卖推荐、精品配件
* 返回数据形如：
  {
    carouselItems: [ ],
    newArrialItems: [ ],
    hotSaleItems: [ ],
    fittingItems: [ ],
  }
*/
    header('Content-Type: application/json;charset=UTF-8');
    $output = [
        "carouselItems"=>"",
        "newArrialItems"=>"",
        "hotSaleItems"=>"",
        "fittingItems"=>""
    ];
    require("init.php");

    //轮播广告商品
    $sql = "SELECT banner_id,banner_pic FROM vivo_banner WHERE banner_place='mall'";
    $result = mysqli_query($conn,$sql);
    $output['carouselItems'] = mysqli_fetch_all($result,MYSQLI_ASSOC);

    //新品专区
    $sql = "SELECT phone_id,phone_pic FROM vivo_phone WHERE phone_type='new_pro'";
    $result = mysqli_query($conn,$sql);
    $output['newArrialItems'] = mysqli_fetch_all($result,MYSQLI_ASSOC);

    //热卖专区
    $sql = "SELECT phone_id,phone_pic,phone_title,phone_detail,phone_price
            FROM vivo_phone WHERE phone_type='hotsale'";
    $result = mysqli_query($conn,$sql);
    $output['hotSaleItems'] = mysqli_fetch_all($result,MYSQLI_ASSOC);

    //精品配件
    $sql = "SELECT fit_id,fit_pic,fit_title,fit_detail,fit_price FROM vivo_fittings WHERE   fit_place='mall'";
    $result = mysqli_query($conn,$sql);
    $output['fittingItems'] = mysqli_fetch_all($result,MYSQLI_ASSOC);

	echo json_encode($output);
?>