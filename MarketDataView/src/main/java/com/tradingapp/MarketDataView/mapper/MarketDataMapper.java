package com.tradingapp.MarketDataView.mapper;

import com.tradingapp.MarketDataView.dto.MarketDataDto;
import com.tradingapp.MarketDataView.entity.MarketData;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;

import java.util.List;

@Mapper(componentModel = "spring")
public interface MarketDataMapper {
    MarketData toMarketData(MarketDataDto marketDataDto);

    MarketDataDto toMarketDataDto(MarketData marketData);

    List<MarketDataDto> toMarketDataDtoList(List<MarketData> marketData);

    @Mapping(target = "id", ignore = true)
    void updateTrade(@MappingTarget MarketData target, MarketData source);
}
