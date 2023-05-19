const axios = required("axios");

const appid = "218466f9cae8ae7cca5fab5c110ec8ed"

const q = "São Paulo"

const lang = "pt-BR"

const units = "metric"

const cnt = "10"

const url = `api.openweathermap.org/data/2.5/forecast?q=${q}&units=
${units}&appid=${appid}&lang=${lang}&cnt=${cnt}`

