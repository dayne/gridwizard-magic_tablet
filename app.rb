require 'sinatra'
require 'mqtt'
require 'json'

configure do
  mqtt = MQTT::Client.connect('localhost') 
end

get '/' do
  erb :index
end

get '/hover/:x/:y' do |x,y|
	puts "Got /hover/#{x}/#{y} event"
  settings.mqtt.publish('gridwiz',{ event: 'hover', x: x, y: y}.to_json)
  "Hello #{n}!"
end

get '/select/:x/:y' do |x,y|
	puts "Got /click/#{x}/#{y} event"
  settings.mqtt.publish('gridwiz',{ event: 'select', x: x, y: y}.to_json)
	"click"
end

get '/alt/:x/:y' do |x,y|
	puts "Got /alt/#{x}/#{y} event"
  settings.mqtt.publish('gridwiz',{ event: 'alt', x: x, y: y}.to_json)
	"alt"
end
