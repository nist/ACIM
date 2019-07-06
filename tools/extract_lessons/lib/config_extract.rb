require 'json'

class Config
  CONFIG_FILE=File.expand_path('config.json')
  @config

  def initialize(filename = CONFIG_FILE)
    begin
      config_file = File.new(filename, "r")
      @config = JSON.load(config_file)
    rescue
      puts "Unable to read config file : #{filename}"
      @config = {}
    end
  end

  def config
    @config
  end

  def languages
    @config.keys
  end

  def urls
    @config.values
  end

  def url(language)
    @config[language]
  end

  def language_valid?(language)
    not @config[language].nil?
  end
end
