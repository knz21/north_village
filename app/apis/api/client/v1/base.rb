module API::Client
  module V1
    class Base < Grape::API
      version 'v1'
      helpers do

      end
      prefix 'api/client'
      mount API::Client::V1::Users
    end
  end
end
