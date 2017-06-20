module API::Client
  module V1
    class Users < Grape::API
      resource :users do
        params do
        end

        get do
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
