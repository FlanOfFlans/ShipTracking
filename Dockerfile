FROM mcr.microsoft.com/dotnet/aspnet:8.0-jammy AS base

WORKDIR /app
EXPOSE 80


ENV ASPNETCORE_URLS=http://+:80

FROM node:20-alpine3.18 AS vuebuild
WORKDIR /src
COPY ["ShipTracking.Vue", "ShipTracking.Vue"]
WORKDIR "/src/ShipTracking.Vue"
RUN npm ci
RUN npm run build

FROM mcr.microsoft.com/dotnet/sdk:8.0-jammy AS publish
WORKDIR /src
COPY . .
WORKDIR "/src/ShipTracking.Website"
RUN dotnet build "ShipTracking.Website.csproj" -c Release -o /app/publish /p:Version="0.1.0"

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
COPY --from=vuebuild /src/ShipTracking.Vue/build wwwroot
ENTRYPOINT ["dotnet", "ShipTracking.Website.dll"]
