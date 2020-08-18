import { IGenre } from './Genre'
import { IProductionCompany } from './ProductionCompany'
import { IProductionCountry } from './ProductionCountry'
import { ISpokenLanguage } from './SpokenLanguage'

export interface IMovie {
  adult: boolean
  backdrop_path: string
  belongs_to_collection: string | null
  budget: number
  genres: Array<IGenre>
  homepage: string
  imdb_id: string
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string | null
  production_companies: Array<IProductionCompany>
  production_countries: Array<IProductionCountry>
  release_date: string
  revenue: number
  runtime: number
  spoken_languages: Array<ISpokenLanguage>
  status: string
  tagline: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export class Movie implements IMovie {
  public readonly id?: number
  public adult: boolean
  public backdrop_path: string
  public belongs_to_collection: string | null
  public budget: number
  public genres: Array<IGenre>
  public homepage: string
  public imdb_id: string
  public original_language: string
  public original_title: string
  public overview: string
  public popularity: number
  public poster_path: string | null
  public production_companies: Array<IProductionCompany>
  public production_countries: Array<IProductionCountry>
  public release_date: string
  public revenue: number
  public runtime: number
  public spoken_languages: Array<ISpokenLanguage>
  public status: string
  public tagline: string
  public title: string
  public video: boolean
  public vote_average: number
  public vote_count: number

  constructor(props: Omit<IMovie, 'id'>, id?: number) {
    if (id) {
      this.id = id
    }
    this.adult = false
    this.backdrop_path = ''
    this.belongs_to_collection = ''
    this.budget = 0
    this.genres = []
    this.homepage = ''
    this.imdb_id = ''
    this.original_language = ''
    this.original_title = ''
    this.overview = ''
    this.popularity = 0
    this.poster_path = ''
    this.production_companies = []
    this.production_countries = []
    this.release_date = ''
    this.revenue = 0
    this.runtime = 0
    this.spoken_languages = []
    this.status = ''
    this.tagline = ''
    this.title = ''
    this.video = false
    this.vote_average = 0
    this.vote_count = 0
    Object.assign(this, props)
  }
}
