require 'test/unit'
require 'rack'
require_relative '../lib/lesson'

# class TestServer
#   def initialize(response_code, response_body, response_headers = {})
#     @response_code = response_code
#     @response_body = response_body
#     @response_headers = response_headers
#   end
#
#   def start
#     @thread = Thread.new do
#       Rack::Handler::WEBrick.run(self, :Port => "9393", :Host => "localhost")
#     end
#     sleep 1
#     puts "started server."
#   end
#
#   def stop
#     Thread.kill(@thread)
#     puts "stopped server."
#   end
#
#   def call(env)
#     [@response_code, @response_headers, [@response_body]]
#   end
# end


class LessonTest < Test::Unit::TestCase

  EXPECTED_LESSONS = {
    "1" => "Nothing I see in this room [on this street, from this window, in this place] means anything.",
    "2" => "I have given everything I see in this room [on this street, from this window, in this place] all the meaning that it has for me.",
    "3" => "I do not understand anything I see in this room [on this street, from this window, in this place].",
    "4" => "These thoughts do not mean anything. They are like the things I see in this room [on this street, from this window, in this place].",
    "5" => "I am never upset for the reason I think.",
    "6" => "I am upset because I see something that is not there.",
    "7" => "I see only the past.",
    "8" => "My mind is preoccupied with past thoughts.",
    "9" => "I see nothing as it is now.",
    "10" => "My thoughts do not mean anything.",
  }

  def test_initialize
    lesson = Lesson.new("lessons.acim.org", "en")
    assert_equal Lesson, lesson.class
    assert_equal "en", lesson.language
    assert_equal "lessons.acim.org", lesson.url
  end

  def test_get_invalid_url
    lesson = Lesson.new("lessons.acim.org", "en")
    lesson.get
    # assert_equal Lesson, extract_lesson.class
  end

  def test_get_valid_url
    lesson = Lesson.new("lessons.acim.org", "en")
    lesson.get
    # assert_equal Lesson, extract_lesson.class
  end

  def test_empty_lessons
  #   lesson = Lesson.new("lessons.acim.org", "en")
  #   lesson.get
  #   assert_equal true, lesson.lessons.empty?
  end

  def test_populated_lessons
    # lesson = Lesson.new("lessons.acim.org", "en")
    # html_data = ""
    # File.open("#{File.dirname(__FILE__)}/fixtures/webrick/chapters.html", 'r') { |html_file|
    #   html_data << html_file.read
    # }
    #
    # server = TestServer.new(200, html_data, {})
    # server.start
    # lesson.get
    # server.stop
    # assert_equal EXPECTED_LESSONS, lesson.lessons
  end

  def test_save
    # lesson = Lesson.new
    # assert_equal Lesson, extract_lesson.class
  end
end
