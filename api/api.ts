import { request, gql } from "graphql-request";

export const document = gql`
  query getFlights($currentPage: Int, $pageSize: Int) {
    Flights(currentPage: $currentPage, pageSize: $pageSize) {
      currentPage
      count
      items {
        AirlineCode
        Carryon
        ChargeAdult
        ChargeChild
        ChargeInfant
        CompareMode
        DayChange
        Duration
        EndDate
        EndPoint
        FareBasis
        FareClass
        FareRule
        FareType
        FeeAdult
        FeeChild
        FeeInfant
        FlightId
        FlightNumber
        Freebag
        GroupClass
        HasChangedClass
        HasDownStop
        MarketingAirline
        NoRefund
        OperatingAirline
        Plane
        PriceAdult
        PriceChild
        PriceInfant
        Promo
        RelatedFlights {
          AirlineCode
          Carryon
          Duration
          EndPoint
          EndTime
          FlightNumber
          Freebag
          Index
          Plane
          SeatClass
          StartPoint
          StartTime
        }
        ReturnFlight
        SeatRemain
        SessionId
        StartDate
        StartPoint
        StopOvernight
        Stops
        TaxAdult
        TaxChild
        TaxInfant
      }
      pageSize
      total
    }
  }
`;
