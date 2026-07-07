
export async function getWeather(city:string){
    const mockWeather:Record<string,string>={

        "Delhi":"42 degrees and sunny",
        "mumbai":"26 degrees and rainy",
        "chennai":"25 degrees and cloudy"
    }

    return {
        city,
        weather:mockWeather[city]??"Weather data not available"
    }
}