module Main exposing
    ( Model
    , Msg(..)
    , init
    , main
    , update
    , view
    )

import Browser
import Html exposing (Html)
import Html.Attributes as Attrs
import Json.Encode as Encode
import Platform


type alias Model =
    {}


init : Model
init =
    {}


type Msg
    = NoOp


update : Msg -> Model -> Model
update msg model =
    case msg of
        NoOp ->
            model


view : Model -> Html Msg
view model =
    Html.div []
        [ Html.span [] [ Html.text "Hello, World" ]
        , Html.node "x-howdy"
            [ Attrs.property "message" (Encode.string "Howdy, partner!")
            ]
            []
        ]


main : Platform.Program () Model Msg
main =
    Browser.sandbox
        { init = init
        , update = update
        , view = view
        }
