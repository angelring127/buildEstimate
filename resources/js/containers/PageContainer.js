/**
 * PageContainer.js
 * 
 */

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import LoginContainer from './LoginContainer';
import MainContainer from './MainContainer';

const pageList = [
  LoginContainer,
  MainContainer
];

const PageContainer = () => {
  const pageInfo = useSelector(state => state.page, []);

  const Page = pageList[pageInfo.page];
  return <Page />;
}

export default PageContainer;