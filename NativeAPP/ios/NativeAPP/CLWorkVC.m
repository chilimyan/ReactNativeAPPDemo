//
//  CLWorkVC.m
//  NativeAPP
//
//  Created by Apple on 2017/4/10.
//  Copyright © 2017年 chilim. All rights reserved.
//

#import "CLWorkVC.h"
#import "CLWebVC.h"
#import <RCTRootView.h>

@interface CLWorkVC ()

@end

@implementation CLWorkVC

- (void)viewDidLoad {
    [super viewDidLoad];
    self.title = @"办公";
    // Uncomment the following line to preserve selection between presentations.
    // self.clearsSelectionOnViewWillAppear = NO;
    
    // Uncomment the following line to display an Edit button in the navigation bar for this view controller.
    // self.navigationItem.rightBarButtonItem = self.editButtonItem;
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
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

#pragma mark - Table view data source

- (NSInteger)numberOfSectionsInTableView:(UITableView *)tableView {
    return 3;
}

- (NSInteger)tableView:(UITableView *)tableView numberOfRowsInSection:(NSInteger)section {
    if (section == 0) {
        return 1;
    }else if (section == 1) {
        return 2;
    }else{
        return 5;
    }
}

- (CGFloat)tableView:(UITableView *)tableView heightForHeaderInSection:(NSInteger)section{
    return 16;
}

- (CGFloat)tableView:(UITableView *)tableView heightForFooterInSection:(NSInteger)section{
    return 0.01;
}

- (UITableViewCell *)tableView:(UITableView *)tableView cellForRowAtIndexPath:(NSIndexPath *)indexPath {
    static NSString *cellIndentifier = @"AddressBookUserCell";
    UITableViewCell *cell = [tableView dequeueReusableCellWithIdentifier:cellIndentifier];
    if (!cell) {
        cell = [[UITableViewCell alloc] initWithStyle:UITableViewCellStyleDefault reuseIdentifier:cellIndentifier];
    }
    if (indexPath.section == 0) {
        cell.imageView.image = [UIImage imageNamed:@"home_tab_icon_work_attend"];
        cell.textLabel.text = @"移动考勤";
    }else if (indexPath.section == 1){
        if (indexPath.row == 0) {
            cell.imageView.image = [UIImage imageNamed:@"home_tab_icon_work_notice"];
            cell.textLabel.text = @"通知公告";
        }else{
            cell.imageView.image = [UIImage imageNamed:@"personal_system_icon"];
            cell.textLabel.text = @"人事制度";
        }
    }else{
        if (indexPath.row == 0) {
            cell.imageView.image = [UIImage imageNamed:@"home_tab_icon_work_circle"];
            cell.textLabel.text = @"工作圈";
        }else if (indexPath.row == 1){
            cell.imageView.image = [UIImage imageNamed:@"home_tab_icon_work_flow"];
            cell.textLabel.text = @"审批流程";
        }else if (indexPath.row == 2){
            cell.imageView.image = [UIImage imageNamed:@"home_tab_icon_work_flow"];
            cell.textLabel.text = @"复杂审批流程";
        }else if (indexPath.row == 3){
            cell.imageView.image = [UIImage imageNamed:@"decision_analysis_icon"];
            cell.textLabel.text = @"决策分析";
        }else{
            cell.imageView.image = [UIImage imageNamed:@"crm_arc_borrow_icon"];
            cell.textLabel.text = @"档案";
        }
    }
    
    return cell;
}

- (void)tableView:(UITableView *)tableView didSelectRowAtIndexPath:(NSIndexPath *)indexPath{
    [tableView deselectRowAtIndexPath:indexPath animated:YES];
    if (indexPath.section == 2) {
        if (indexPath.row == 2) {
            CLWebVC *webVVC = [[CLWebVC alloc]init];
            
            NSURL *jsCodeLocation = [NSURL
                                     URLWithString:@"http://localhost:8081/index.ios.bundle"];
            RCTRootView *rootView =
            [[RCTRootView alloc] initWithBundleURL : jsCodeLocation
                                 moduleName        : @"AwesomeProject"
                                 initialProperties :@{@"type": @"vwork"}
                                  launchOptions    : nil];
            webVVC.view = rootView;
            [self.navigationController pushViewController:webVVC animated:YES];
        }
    }
}


@end
