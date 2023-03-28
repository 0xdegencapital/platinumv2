import React from 'react'
import styled from 'styled-components'
import { Heading, Text, BaseLayout } from 'zkvibeswap1'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'
import FarmStakingCard from './components/FarmStakingCard'
import Timer from './components/Timer'
import CakeStats from './components/CakeStats'
import TotalValueLockedCard from './components/TotalValueLockedCard'
import TwitterCard from './components/TwitterCard'
import BG from '../BG'
import CardValue from './components/CardValue'
import CakeHarvestBalance from './components/CakeHarvestBalance'
import CakeWinnings from './components/CakeWinnings'
import AddVibeCard from './components/AddVibeCard'


const Hero = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  padding-top: 32px;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.lg} {
  }
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 48px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`

const Home: React.FC = () => {
  const TranslateString = useI18n()

  return (
    <>
    <Page>
      <Hero>
        <img src= "/images/TitleBar5.png" alt="cake logo" width={450} height={125} />
        <Heading as="h1" scale="lg" mt="40px" mb="24px" color="secondary">          
          {TranslateString(578, "DeFi protocol focused on achieving sustainability powered by zkSync Network")}
        </Heading>
        {/* <Heading as="h1" scale="md" mt="10px" mb="24px" color="secondary">
          {TranslateString(545, 'Farming will start (on ')}<a href="/farms" rel="noreferrer" target="_blank">Soon)</a>
        </Heading>   */}
      </Hero>
      <AddVibeCard />
      <br/>
      <div>

        <Cards>

          <FarmStakingCard />
          <TwitterCard />
          <CakeStats />
          <TotalValueLockedCard />
          {/* <Timer /> */}
          {/* <VibeStats /> */}
        </Cards>
      </div>
    </Page>

    </>
  )
}

export default Home
