//
//  JSBridgeModel.m
//  NativeAPP
//
//  Created by Apple on 2017/3/22.
//  Copyright © 2017年 chilim. All rights reserved.
//

#import "JSBridgeModel.h"

@interface JSBridgeModel ()

@property (nonatomic, strong)NSDictionary *constantsToExport;

@end

@implementation JSBridgeModel

- (instancetype)init{
    self = [super init];
    if (self) {
       
    }
    return self;
}

//实现协议
RCT_EXPORT_MODULE();

//接收JS的传值
RCT_EXPORT_METHOD(addEventOne:(NSString *)name){
    NSLog(@"%@", [NSString stringWithFormat:@"接收JS传过来的:%@",name]);
    dispatch_sync(dispatch_get_main_queue(), ^{
         [[NSNotificationCenter defaultCenter]postNotificationName:@"RNPOPVC" object:name];
    });
}
////  对外提供调用方法,演示Callback
RCT_EXPORT_METHOD(testCallbackEventOne:(NSString *)name callback:(RCTResponseSenderBlock)callback){
    NSLog(@"%@",name);
    NSArray *events=@[@"1", @"2", @"3",@"4"]; //准备回调回去的数据
    callback(@[[NSNull null],events]);
}
//js获取静态常量
- (NSDictionary *)constantsToExport{
    return @{@"test":@"1111"};
}

@end
