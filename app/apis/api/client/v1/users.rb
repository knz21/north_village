module API::Client
  module V1
    class Users < Grape::API
      resource :users do
        params do
          requires :token, type: String, allow_blank: false
        end

        get do
          dec = JWT.decode(params[:token], ENV['JWT_TOKEN_SECRET'], 'HS256')
          puts dec[0]['id']
          {
              status: 1,
              result: {
                  users: [
                      {
                          id: 1,
                          name: 'user1'
                      },
                      {
                          id: 2,
                          name: 'user2'
                      },
                      {
                          id: 3,
                          name: 'user3'
                      },
                  ]
              }
          }
        end
      end
    end
  end
end
