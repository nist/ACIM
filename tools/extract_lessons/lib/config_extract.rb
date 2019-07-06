require 'json'

class ConfigExtract
  @config_extract = {}

  def initialize
    filename = File.expand_path('config.json')
    begin
      config_file = File.new(filename, "r")
      @config_extract = JSON.load(config_file)
    rescue
      puts "Unable to read config file : #{filename}"
      @config_extract = {}
    end
  end

  def config
    @config_extract
  end

  def languages
    @config_extract.keys
  end

  def urls
    @config_extract.values
  end

  def url(language)
    @config_extract[language]
  end

  def language_valid?(language)
    not @config_extract[language].nil?
  end
end
