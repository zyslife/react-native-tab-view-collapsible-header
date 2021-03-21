import { TabView, TabViewProps, Route, TabBar } from 'react-native-tab-view';
import React from 'react';
import { GestureContainer, CollapsibleHeaderProps } from 'react-native-head-tab-view'

type ZTabViewProps<T extends Route> = Partial<TabViewProps<T>> &
    Pick<TabViewProps<T>, 'onIndexChange' | 'navigationState' | 'renderScene'> & CollapsibleHeaderProps
type ForwardTabViewProps<T extends Route> = ZTabViewProps<T> & { forwardedRef: React.Ref<TabView<T>>, Component: typeof TabView }

export default function createHeaderTabsComponent<T extends Route>(Component: typeof TabView, config?: {}): React.ForwardRefExoticComponent<React.PropsWithoutRef<ZTabViewProps<T>> & React.RefAttributes<TabView<T>>> {

    return React.forwardRef((props: ZTabViewProps<T>, ref) => {
        return <CollapsibleHeaderTabView {...props} forwardedRef={ref} Component={Component} />
    });
}

function CollapsibleHeaderTabView<T extends Route>(props: ForwardTabViewProps<T>): any {

<<<<<<< HEAD
    const _renderTabBar = (tabbarProps: any) => {
        if (props.renderTabBar) {
            return props.renderTabBar(tabbarProps)
=======
    renderTabViewContainer = (props: TabViewContainerBaseProps) => {
        const collapsibleParams: CollapsibleHeaderProps = {
            frozeTop: this.props.frozeTop,
            tabbarHeight: this.props.tabbarHeight,
            overflowHeight: this.props.overflowHeight,
            scrollEnabled: this.props.scrollEnabled,
            isRefreshing: this.props.isRefreshing,
            refreshHeight: this.props.refreshHeight,
            makeRoomInRefreshing: this.props.makeRoomInRefreshing,
            onStartRefresh: this.props.onStartRefresh,
            makeScrollTrans: this.props.makeScrollTrans,
            makeHeaderHeight: this.props.makeHeaderHeight,
            renderScrollHeader: this.props.renderScrollHeader,
            renderRefreshControl: this.props.renderRefreshControl
        }

        return <FitTabView
            {...collapsibleParams}
            {...props}
            currentIndex={this.props.navigationState.index}
            renderTabView={this.renderTabView}
        />
    }

    _onIndexChange = (index: number) => {
        DeviceEventEmitter.emit(EVENT_TAB_ONCHANGE, { index })
        this.props.onIndexChange && this.props.onIndexChange(index)
    }

    _renderTabBar = (tabbarProps: any) => {
        if (this.props.renderTabBar) {
            return this.props.renderTabBar(tabbarProps)
>>>>>>> c84a1c8bf6c1274c3372f98e37d1fd32cb6d7ef4
        }
        return <TabBar {...tabbarProps} />
    }

    const renderTabView = (e: { renderTabBarContainer: any }) => {
        const { Component } = props

        return <Component
            ref={props.forwardedRef}
            {...props}
            renderTabBar={(tabbarProps) => e.renderTabBarContainer(_renderTabBar(tabbarProps))} />
    }

    return <GestureContainer
        currentIndex={props.navigationState.index}
        renderTabView={renderTabView}
        {...props} />
}
