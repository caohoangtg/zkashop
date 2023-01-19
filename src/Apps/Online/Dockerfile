FROM mcr.microsoft.com/dotnet/sdk:6.0 AS base
WORKDIR /app
COPY Online.csproj .
RUN dotnet restore
COPY . .
RUN dotnet publish -c Release -o /app/publish

FROM mcr.microsoft.com/dotnet/aspnet:6.0
ENV ASPNETCORE_URLS=http://+:5000
WORKDIR /app
COPY --from=base /app/publish .
ENTRYPOINT [ "dotnet", "Online.dll" ]