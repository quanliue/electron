import React from 'react';
import { COLORS } from './constants/const';
import styled from 'styled-components';

export const SpaceBetweenDiv = styled.div`
  justify-content: space-between;
  display: flex;
  flex-direction: row;
`
export const CustomButton = styled.button`
  padding: 0.2em;
  padding-top:0;
  padding-bottom:0;
  background-color: ${COLORS.button};
  border-color: ${COLORS.border};
  border-radius: 0.3em;
  border-width: 1px;
`
export const HorizonSpace = styled.div`
  min-height: ${props => props ? props.space : 10}px;
  max-height: ${props => props ? props.space : 10}px;
  height: ${props => props ? props.space : 10}px;
`
export const VerticalSpace = styled.div`
  min-width: ${props => props ? props.space : 10}px;
  max-width: ${props => props ? props.space : 10}px;
  width: ${props => props ? props.space : 10}px;
`
export const BorderDiv = styled.div`
  border: 1px solid ${props => props.color};
  padding: 1em;
`

export const TabWidget = styled.div`
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
`

export const FullHeightDiv = styled.div`
  flex-direction: column !important;
  width: 100%;
  height: 100%;
`