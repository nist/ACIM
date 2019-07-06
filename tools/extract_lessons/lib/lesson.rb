require 'nokogiri'
require 'open-uri'
require 'json'

class Lesson
  PATH=File.expand_path('lessons')
  PAGE=""
  @lessons
  @url
  @language

  def initialize(url, language)
    @lessons = {}
    @url = url
    @language = language
  end

  def language
    @language
  end

  def url
    @url
  end

  def get
    html_doc = Nokogiri::HTML(open("http://#{@url}/chapters.html"))
    html_doc.xpath('/html/body/div/div[3]/div/section/div[3]/div[2]/ul/li').each do |lesson|
      lesson_number,lesson_text = lesson.children.children.text.split(' – ')
      @lessons[lesson_number] = lesson_text
    end
  end

  def lessons
    @lessons
  end

  def save(path = PATH)
    json_file = File.new("#{path}/#{language}.json", 'w')
    @lessons.each do |number, title|
      if number && title
        lesson = {number => title}
        json_file.puts(lesson.to_json)
      end
    end
    json_file.close
  end
end
