require 'test/unit'
require_relative '../lib/config_extract'

class ConfigExtractTest < Test::Unit::TestCase

  def test_valid_config_file
    config = ConfigExtract.new
    assert_equal ConfigExtract, config.class
    assert_equal false, config.config.empty?
  end

  # def test_invalid_config_file
  #   config = ConfigExtract.new('invalid_file.json')
  #   assert_equal true, config.config.empty?
  # end

  def test_languages
    config = ConfigExtract.new
    assert_equal ['de','en','es','fr','it','nl','pt'], config.languages
  end

  def test_urls
    config = ConfigExtract.new
    assert_equal ["lektionen.acim.org", "lessons.acim.org", "lecciones.acim.org", "lecons.acim.org", "lezioni.acim.org", "lessen.acim.org", "licoes.acim.org"], config.urls
  end

  def test_url_valid_language
    config = ConfigExtract.new
    assert_equal "lessons.acim.org", config.url('en')
  end

  def test_url_invalid_language
    config = ConfigExtract.new
    assert_equal nil, config.url('ZZ')
  end

  def test_valid_language
    config = ConfigExtract.new
    assert_equal true, config.language_valid?("en")
  end

  def test_invalid_language
    config = ConfigExtract.new
    assert_equal false, config.language_valid?("zz")
  end

  def test_empty_language
    config = ConfigExtract.new
    assert_equal false, config.language_valid?('')
  end

end
