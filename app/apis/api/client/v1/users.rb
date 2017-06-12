module API::Client
  module V1
    class Users < Grape::API
      resource :users do
        params do
          # requires :param, type: String, allow_blank: false
        end

        get do


          {
              status: 1,
              result: {
                  users: [
                      {
                          id: 1,
                          name: 'user1'
                      }
                  ]
              }
          }
        end
      end
    end
  end
end
