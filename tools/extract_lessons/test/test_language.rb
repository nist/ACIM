require 'test/unit'
require_relative '../lib/language'

class LanguageTest < Test::Unit::TestCase
  def test_valid_language
    assert_equal true, Language.is_valid?('en')
  end

  def test_invalid_language
    assert_equal false, Language.is_valid?('zz')
  end

  def test_empty_language
    assert_equal false, Language.is_valid?('')
  end

end
