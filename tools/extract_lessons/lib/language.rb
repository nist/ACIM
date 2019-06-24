class Language

  SUPPORTED_LANGUAGES=['de','en','es','fr','it','nl','pt']

  def self.is_valid?(language_code)
    SUPPORTED_LANGUAGES.include?(language_code)
  end
end
