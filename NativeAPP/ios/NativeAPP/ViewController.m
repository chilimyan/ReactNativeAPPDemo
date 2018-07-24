//
//  ViewController.m
//  NativeAPP
//
//  Created by Apple on 2017/3/15.
//  Copyright © 2017年 chilim. All rights reserved.
//

#import "ViewController.h"
#import <RCTRootView.h>
#import "CLWebVC.h"
#import "JSBridgeModel.h"
#import "CLWorkVC.h"

@interface ViewController ()



@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    self.view.backgroundColor = [UIColor whiteColor];

    JSBridgeModel *bridgeModel = [[JSBridgeModel alloc]init];
    
    UIButton *button = [[UIButton alloc]initWithFrame:CGRectMake(100, 100, 160, 40)];
    [button setTitle:@"React Native APP示例" forState:UIControlStateNormal];
    [button setTitleColor:[UIColor blackColor] forState:UIControlStateNormal];
    [button addTarget:self action:@selector(clicked) forControlEvents:UIControlEventTouchUpInside];
    [self.view addSubview:button];
    
    UIButton *button1 = [[UIButton alloc]initWithFrame:CGRectMake(100, 160, 160, 100)];
    [button1 setTitle:@"原生界面跳转到React Native界面示例" forState:UIControlStateNormal];
    [button1 setTitleColor:[UIColor blackColor] forState:UIControlStateNormal];
    [button1 addTarget:self action:@selector(clicked1) forControlEvents:UIControlEventTouchUpInside];
    [self.view addSubview:button1];
    
    
//    NSLog(@"High Score Button Pressed");
//    NSURL *jsCodeLocation = [NSURL
//                             URLWithString:@"http://localhost:8081/index.ios.bundle"];
//    RCTRootView *rootView =
//    [[RCTRootView alloc] initWithBundleURL : jsCodeLocation
//                         moduleName        : @"AwesomeProject"
//                         initialProperties :nil
//                          launchOptions    : nil];
//    self.view = rootView;
    // Do any additional setup after loading the view, typically from a nib.
}

- (void)viewWillAppear:(BOOL)animated {
    [super viewWillAppear:animated];
    [self.navigationController setNavigationBarHidden:NO animated:YES];
}

- (void)loadView
{
    [super loadView];
    [self.navigationController setNavigationBarHidden:NO animated:YES];
}

- (void)clicked1{
    CLWorkVC *bb = [[CLWorkVC alloc]initWithStyle:UITableViewStyleGrouped];
    [self.navigationController pushViewController:bb animated:YES];
}

- (void)clicked{
    CLWebVC *webVVC = [[CLWebVC alloc]init];
    
    NSURL *jsCodeLocation = [NSURL
                             URLWithString:@"http://localhost:8081/index.ios.bundle"];
    RCTRootView *rootView =
    [[RCTRootView alloc] initWithBundleURL : jsCodeLocation
                         moduleName        : @"AwesomeProject"
                         initialProperties :nil
                          launchOptions    : nil];
    webVVC.view = rootView;
    [self.navigationController pushViewController:webVVC animated:YES];
}


- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}


@end
