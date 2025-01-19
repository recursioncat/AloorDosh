# Steps to Use the Back-End

## Install Dependencies
This backend was made with python - 3.11.7 . To Install the Required Dependencies run the following command with this folder as root
```bash
pip install -r requirements.txt
```

## Api Testing
- The backend can be tested with an API. Run the file `ClassificationApi.py`. <br>
- A `flask` server will run on `port 8000` on your device. To send requests to it, you can use any API platform like postman, with a json attached. <br>
- Currently the two supported vegetables are `Tomato` and `Potato`. To check the disease on a picture, send a get request to the route for the required vegetable.

```txt
localhost:8000/tomato  ---> For tomato
localhost:8000/potato  ---> For potato
```
Attach a `json` like follows:-

```json
{
    "url": "path/to/your/image.jpg"
}
```

- The API will return back the disease

## API Limitations
- Currently, does not have the ability to identify plants and then identify disease.

 