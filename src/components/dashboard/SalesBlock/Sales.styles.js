import styled from "styled-components"
import { BlockWrapStyles } from "../../../styles/global/default"
import { media } from "../../../styles/theme/theme"

export const SalesBlockWrap = styled.div`
  ${BlockWrapStyles}

  .block-head {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    flex-wrap: wrap;

    .block-title {
      margin-bottom: 4px;
      color:white;
    }

  }

  .export-btn {
    display: flex;
    align-items: center;
    column-gap: 6px;
    height: 32px;
    border: 1px solid ${(props) => props.theme.colors.columbiaBlue};
    background-color: ${(props) => props.theme.colors.white};
    border-radius: 6px;
    padding: 2px 8px;
    font-weight: 600;
  }

  .cards {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 16px;

    ${media.xxxl`
      gap: 10px;
    `}

    ${media.md`
      grid-template-columns: repeat(2, 1fr);
    `}

    ${media.xs`
      grid-template-columns: 100%;
    `}
  }

  .card-item {
    border-radius: 12px;
    padding: 16px 18px;

    ${media.xxl`
      padding: 14px 12px;
    `}

    &.card-misty-rose {
      background-color: #019D84;
      .card-item-icon {
        background-color: ${(props) => props.theme.colors.pink};
      }
    }

    &.card-latte {
      background-color: #4D927D;
      .card-item-icon {
        background-color: ${(props) => props.theme.colors.salmon};
      }
    }

    &.card-nyanza {
      background-color: #B76365;
      .card-item-icon {
        background-color: ${(props) => props.theme.colors.malachite};
      }
    }
    &.card-nyanza2 {
      background-color: #FFA746;
      .card-item-icon {
        background-color: ${(props) => props.theme.colors.malachite};
      }
    }

    &.card-pale-purple {
      background-color: #FF6452;
      .card-item-icon {
        background-color: ${(props) => props.theme.colors.violet};
      }
    }

    .card-item-icon {
      border-radius: 100%;
      width: 36px;
      height: 36px;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 22px;
      }
    }

    .card-item-value {
      font-weight: 700;
      font-size: 22px;
      margin-top: 12px;
      margin-bottom: 4px;
      color: ${(props) => props.theme.colors.black};
    }

    .card-item-text {
      font-weight: 600;
      color:black;
    }

    .card-item-sm-text {
      font-size: 14px;
      font-weight: 500;
      color: ${(props) => props.theme.colors.blue};
    }
  }
`
