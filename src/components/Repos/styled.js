import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

export const WrapperTabs = styled(Tabs)`
    font-size: 14px;
    width: 100%;
    margin-top: 16px;
`
export const WrapperTabList = styled(TabList)`
    list-style-type: none;
    padding: 4px;
    display: flex;
    margin: 0;
`
WrapperTabList.tabsRole = "TabList"

export const WrapperTab = styled(Tab)`
    border-radius: 4px;
    border: 1px solid #c8c8c8;
    padding: 8px;
    margin-right: 4px;
    background-color: #c8c8c8;
    user-select: none;
    cursor: pointer;
    
    &:focus {
        outline: none;
    }

    &:hover, &.is-selected {
        background-color: #8c8c8c;
        border: 1px solid #8c8c8c;
    }
    
    &:active {
        color: #fff;
        background-color: #8c8c8c;
    }
`
WrapperTab.tabsRole = "Tab"

export const WrapperTabPanel = styled(TabPanel)`
    display: none;
    min-height: 50vh;
    border-radius: 4px;
    border: 1px solid #ccc;
    padding: 12px;
    margin: 4px 8px 8px 4px;
    background-color: #c8c8c8;

    &.is-selected {
        display: block;
    }
`
WrapperTabPanel.tabsRole = "TabPanel"

export const WrapperList = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
`