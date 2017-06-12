module API
  class Root < Grape::API
    prefix 'api'
    format :json
    content_type :json, 'application/json; charset=utf-8'
    mount Client::V1::Base
  end
end
