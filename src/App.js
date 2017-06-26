import React, { Component } from 'react'
import 'typeface-hind'
import './App.css'
import coffee from './coffee.svg'
import f from 'fib'
import { Flex, Block, InlineBlock } from 'glamor-jsxstyle'
import { Helmet } from 'react-helmet'

const Fib = ({ number, color, onClick }) =>
  <Card color={color} onClick={() => onClick(f(number))}>
    {f(number)}
  </Card>

const Card = ({ color, children, onClick }) =>
  <InlineBlock
    className='Card'
    cursor='pointer'
    width={84}
    fontSize={32}
    color='white'
    backgroundColor={color}
    textAlign='center'
    borderRadius={4}
    lineHeight={1}
    fontWeight={300}
    marginLeft={8}
    marginRight={8}
    padding='40px 8px'
    onClick={onClick}
  >
    {children}
  </InlineBlock>

const Tray = ({ children }) =>
  <Block
    className='Tray'
    position='fixed'
    whiteSpace='nowrap'
    overflowX='auto'
    background='#F4F5F5'
    padding={16}
    bottom={0}
    left={0}
    right={0}
    children={children}
  />

const OpenClose = ({ open, onClick }) =>
  <Block cursor='pointer' position='absolute' left={0} right={0} bottom={0} onClick={onClick} padding={8} textAlign='right'>
    <img src={open ?  'https://icon.now.sh/chevronDown/CCC' : 'https://icon.now.sh/chevronUp/CCC'} />
  </Block>

const colors = ['#DC7465', '#6794AE', '#F2D770']

export default class extends Component {
  state = {
    display: null,
    open: true,
    color: null,
  }

  render() {
    const { display, color, open } = this.state
    return (
      <Block fontFamily='Hind' height='100%'>
        <Helmet>
          {(color === '#F2D770' || color === null) && <meta name='theme-color' content='#F2D770' />}
          {color === '#6794AE' && <meta name='theme-color' content='#6794AE' />}
          {color === '#DC7465' && <meta name='theme-color' content='#DC7465' />}
        </Helmet>
        <Flex alignItems='center' height={!open ? '100%' : 'calc(100% - 144px)'} position='relative'>
          {
            display === null
            ? <p style={{ margin: 'auto', opacity: .5 }}>Tap a Card Below</p>
            : <InlineBlock color={color} fontWeight={600} fontSize={display === 'Coffee' ? '5rem' : '12rem'} margin='auto'>{display}</InlineBlock>
          }
          <OpenClose open={open} onClick={() => this.setState({ open: !open })} />
        </Flex>
        {
          open
          && (
            <Tray>
              <Card color={colors[0]} onClick={() => this.setState({ display: 0, color: colors[0] })}>0</Card>
              <Fib color={colors[1]} number={1} onClick={n => this.setState({ display: n, color: colors[1] })} />
              <Fib color={colors[2]} number={2} onClick={n => this.setState({ display: n, color: colors[2] })} />
              <Fib color={colors[0]} number={3} onClick={n => this.setState({ display: n, color: colors[0] })} />
              <Fib color={colors[1]} number={4} onClick={n => this.setState({ display: n, color: colors[1] })} />
              <Fib color={colors[2]} number={5} onClick={n => this.setState({ display: n, color: colors[2] })} />
              <Fib color={colors[0]} number={6} onClick={n => this.setState({ display: n, color: colors[0] })} />
              <Fib color={colors[1]} number={7} onClick={n => this.setState({ display: n, color: colors[1] })} />
              <Fib color={colors[2]} number={8} onClick={n => this.setState({ display: n, color: colors[2] })} />
              <Fib color={colors[0]} number={9} onClick={n => this.setState({ display: n, color: colors[0] })} />
              <Fib color={colors[1]} number={10} onClick={n => this.setState({ display: n, color: colors[1] })} />
              <Fib color={colors[2]} number={11} onClick={n => this.setState({ display: n, color: colors[2] })} />
              <Card color={colors[0]} onClick={() => this.setState({ display: '?', color: colors[0] })}>?</Card>
              <Card color={colors[1]} onClick={() => this.setState({ display: '∞', color: colors[1] })}>∞</Card>
              <Card color={colors[2]} onClick={() => this.setState({ display: 'Coffee', color: colors[2] })}>
                <img style={{ margin: '-5px 0 -5px', display: 'inline-block' }} src={coffee} />
              </Card>
            </Tray>
          )
        }
      </Block>
    )
  }
}