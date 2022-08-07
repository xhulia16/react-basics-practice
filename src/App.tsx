import { useState } from "react";
import "./App.css";

type State = {
  id: number;
  name: string;
  quantity: number;
  image: string;
};

function App() {
  const [state, setState] = useState<State[]>([
    {
      id: 1,
      name: "candy",
      quantity: 5,
      image:
        "https://previews.123rf.com/images/ylivdesign/ylivdesign1612/ylivdesign161208879/67932932-candy-icon-cartoon-illustration-of-candy-vector-icon-for-web-design.jpg",
    },
    {
      id: 2,
      name: "chocolate",
      quantity: 3,
      image:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABKVBMVEX///8iFgraGAB2TCSzs7NYORxuDAGjEgFXOBwfFAkAAABbOx0eFAmlEgGwsLCgEgGiAABsAABSNRplAABxSSMpGw1CKxUlGAtfPh5LMRhqRSFoAAAuHg47JxNtRyK0ubkTAAA1IxHs7OzNFwEZCQAWAADZ2dm4FQHGFgFhAAB0DQEtHg6/v7/Ozs7z8/Pg4OCzFAGBDwGNEAFUMg+WEQGopaJdWFRsZ2KHg3+SjotRS0Y+NjBRLQBtV0WHeW+rb2unRT+xoZ+kIhemNCzdy8mNT0u8m5k0KyQ9NCx6dXCYlZFpZWEsIxpZU08/IwB8bGBvWklhRiwvEwCtfHiqZF+uioiMZGKmNi6gjIqoUk19KSGrcm6Qa2l+PjmRWVfIrat2IRvEp6SFOjS0Jz7PAAAOk0lEQVR4nO2dCVMT2RbHiRCSprOQQBbWQAh7EkBkkzeOKIKg4+hD9I0oKt//Q7y7L923l4RQ5zLVZ6qmZiZDqn+c7X/PuYlDQ4klllhiiSWWWGKJJZZYYoklllhiiSWWmF22tbfX7qw0oR/j4exijNpC7fjg6LLQ2Wp2oR9psHY5lmLmtJYXFjBq6vx4/+Ky0F75d7C2nJTPHKdFWMeWz5/vXxwV2p0t6Mfs35pjfkANFTmWBPHy2/2LQ5ywj82vnVBCjZYF8dhY6/jgECXsytajgG3HJlRhWcK2asixl3soYS3O2EI/hKpjqV9b58d/XRyhILbPr0cL/FmR3Y+VJWzqeP/ApoS9YIS16tzc4mYtl8s5g2ClsJXnB4cdaML9Fn2sWRdb2s2Wp6rVucXZSsrJob/uhUr9egFM+JwSOotuWhhhzSLWqepchbyKWfuFHduDJTynD+7MKYSKuXPodaeKHEv8mnJ6D2LnHBSwy4LUqbrYd1lmknAR0eTKLnUsimHMOrdYSeGEjRnEDighlzRONZ3OTg8PD09Ozk9P1+s4SjGnu4lfLOt+ZbAoiDE/S9hg2PeghCuccAoRzg+rNjmJcUgeYtZs2m/uFI7hOZKwKIhrpOV4WZ1jUEIuaXLITdnJYd0QVJa8inO0jh2b1oPYrToswLFj0asaKyNs7YMSckmTy/oJJ/F/y6EXKzgNmV9RDLMg5nUoN+VxLE/YGn3rhUNQwj0uaTDNsJ+wjAlnBaH6ap3VIRzg6awhiNk7L1yCEh4ywgp+JA/DPHpqkmi4V9a9hMMuq0MkwOt1Vp1kDBP3p8D74TshafxumkbPShIN9cqsmbDicT8txHXSW8ucsA1KqEoaLwQiZKWEdRLdMAVOtVo22P2EcAWUUJE0PjfVs7KU+AlxLynzADe5f4r7EHSK163xhu/6IdRS4umVw6wO4d/PZkiAk24BSthc8Ega1bRS4u2V4XWIuz8FLku3VEljIiSlxEjIA9Ec4Mz98JKGz6Gw8vQFIq74QaVErUOGAMe/nFkWpH+BEo5ESBpaSkwNP7wOuVzRplLLsCdgLmly6V4lTXgd4p0ES5ojUEI+h6oZCGNImtlIzY6aRQGU8GCZibaAih9YSoibSB0KDHDe8O2RNO70/KT6pEK0mUoJJSQ/HOJ+Qgg7bGPVgM6hqGx26/Xp6fn5yQhJQ1LNCdDsmqSBXerwhq/NoeQJIY6kCdPshBB0MNwVUxpyRPdPKXgpSRPHqjE8z7M0QtKkapCAQtKkKrOLc9WpqTI7oQtCXkqEY12XsU7zShuk2e2SNCmytsg5uZxTw6zVqXKZsPJSopocOMaSNLBTGuNqjYzL8Ci0sjhH/JtNu8YgZtNi/E/UsZMqIZc0B6CEe+GrNT4uq/EgzmqwckojixNlVSUN7BxKrNYiNxM0iBVWnLF0Hm4I4rSUNAuwUxqxWkvzQSffrgXDsoTFxQm7ySm7rimILZE0+8ocig3rGeviZg3XnfAgJn8nsHPUsQps2Q5J85ZV9EWPC+hjZsuk4lcqtaiNk8P9zoO4bMscakFdrfmHurRYTqXJxqmKV8S12AnLCg2wpBmSkgbpkmk502WwWilhMcwTNhVzizgGCshXa5q2Voa6iqTxBjGGJcqzEr77dyqghJ3g1Zo8HeVEv/Ny8nl4Wu7+c95VYus5KGFbnUMZjukuPgDh43+arU1dlVXMw4Vf+e6frNeoAUsacVvIQKit1uT5T6yIZR0yB7EdkuZSmdJ4D7F8DhUwpeFzqNxUOu1Zm1JKFqnAqzUuaUxTGnUOFbB4muUBPq/s/hmqaPiwcyi+WgvbPATPoeSKX/E8YbVH0txjtaat+APcTwgf7WrNXIek++2YQ3XF4ilktZYLnkMFzcO5+wmhJXOogMWTKCV9r9ZSy5CAYbeFZClxSMP3EpI6FGe19haUULst5CXENTKolPSwWoOdQ42EiDZRSmpGwtA6lJVzqEd7Wyh8tSbcDy5p7nlbKGy1lrbrthCRNJ7HjFitha34hftT4HMoLmlm2QzDVQa7oaXk0dwWOvZfgOYzDHwSDFutha34LZI0FUdIGpPJUlKf13enkZLGsttCqdmqnNirhFzSsDG2EsSxJQ3sBegt+cFDsoipyRUbPabzUiJNieHHdFtIMWViP1etklJiXjul5WotXffs/1VJAzuHGglbPInpYGURT+zLbGKvxLBYrTHPohimQazeFrJktRZjYp9TJ/YUVq7WPDHMO0nKnttCbNgZf2JPWMnBo2wO4ixvh7CSRrktpE3sN/HEPmLvJGKY7cSz+v5fSJoRUEJN0oj0Uj4PQ16NsU4kv48aTVi6YrNkDsWnNN7VGmelxZJN7DcNE3sDa47s/2dZKYW+LcQfDIs2t+663s/DyFIiJvY8YXNOxPKUE4JOaZosDeWURpnYp5XTkeZY/nmYKX7HOWx36tRACbdMqzWuO/npKMdEmz+G6W2htPZpPS8rsKSJnEOJ05E6sRes8jNdsjqJFRsjBL4AHfapNfxZCjLSVo//k3LFpkkaTxDjdaJdkoZcgA66ARs8pRGrNcPuNG3HHIpLmpxrvgFbDp7SiDkUdj/1qxbDltwW4nOomoEw9OKhnNLoF6BRENfrVNLwhg8rafbjrNaqgVe8RYAzONlmrJlDqZIm6JgevFojK35yxVts92UaksOx02oBz6F4swhbrQVfgJarNU+Z2d3d/c+HVqp2fvz83TtrbgsFf2pN7yRKMIoVvwKG7NMff784utzbKzTajcYIbBoabwuZS8nkJAHTyiWfQ1EyBPb34SXiwliKgRJGSRp5W8h0XWj3wwKy6qePxGWIRSdjBltoOoGLJxSLGAIXopq3lWOX7aY//fHx4uIIxeJIw0jGrABLWFAI6QaU9DOXf10E/XiommW7u8xlEWCSEPb8y28LkZv4Isukt8ronNCa5Vn2wpRlkYSwzUKVNKZY/LDw/vj5QViWRRPCnvD5HGpTq/g0y6jL4gZjMCHsVzEqt4UIGCL7+OJFdPkIRcImPV6AbfjvW/QLq/5b/6On8hEEhtDanRXyrZLNghWEY/gbEVEwNnqtHwYwz9dlrnBCMDhihX7rxwgH4y7zmR2E3UKfYCOBYMI67L1hG34zNiELxkY0Gbc2+0FYwq0oQm/56MH4O8BKmpUgwsgsizaehrCSplMYOJgwTggraQQhLx+dlWZ3MP2LFzFgScOqwUj7/i7zWtMqwoeoBpZIGh6jD1ANRJke/Fv3Yg9YDVasIHzIatCxgvAhc6VthWjb6lMcdzvtdtQ3ID9gEevB+syVJuqduH+Gfqe1ZaKttx9TFFA78I+LsEu09ZYrbVXqBbrSDtHW1wHHq2VpwHpdaYloa/SRK+YDF5brWu15vJImeCqAz8fSlVtWEY404n/TfzsIkFMyV9olaWgqBZdFxWQSBs7mSO0R/2Pj4TFCTJ/SkDFMhDOVmcDnq5PACSQ5bFKzbg4V7kz5A40/x8fHX3++LkSMWYEbfsAcCjvT/GdwiP+lcT2eyWTy4+OZl1cnYWNyaEkT9ss3OFO2+r18PkMNufJViCuBJc31l5PQibfHmUqVeT2ekYZcOf71T7MrgSXNm5nS6O3/IlJJOFPGdOOzCsgpi/9cn/jeCljSfCuNjpZKoz+uQ1OJU4p/a1wxwGJRoyS150z/hQE3fASIrbQz/urlzdlIzPVT44QCFpeW1raLOiVyZf7lleJK4LXMDCUcfZrHv39c/INbnOKWV6TKFNeeYFtbzftd+eqziH1QwuaEJOQVI4+cuReK2XhJXFjcfiJsbTvjdeXOzN13RAksaU454bO85oH8a6RXguoPavUU4olmS7or8zsowVGGf4eNUiMhdybOTMPKm7Z6ZEtPfLa2LSjzGzTDZ25BCX9yQj2PJOX4V19m7tFfBktCnyFXqoSjM1eghNe80pCnyuc9dZFj/nNzJm8J0VZfXDUDYqOI7J1nrkEJrzTCbVIXvT2OZiYpsyhkT776qozPyM8X2TtP/AQl/ML64QYnpHG2HeDMV1+/jhurjJ8wLwhPQQl/MMKdvCfwlkiT81FytV00VBkP4TM7CFk1YITe2oGcmfFjhlQZ9mOE8Cl763VYWao1fPNzG5wZDvhkTScEBeyua4SBoadlZjEfGqKccIe9dQmU8JQTPgsnJJRrtNFthzsQ2apKWPoGS6hJmmLUo8c0SshSvGSLpBkk4bZFkuaMN/xiZI/rwag+skvS0IY/UEIu2ibOQAlvTJLm3maTpLkNkjT3J7RE0tw9BOGSTgg7S+SiLUTS9EvIJc0E7Ncl6qItQqrENV3SzEACDjV7kDTxTZc0G6CEninNYAA9hHeghLqkGRShJmlKN5YQZgZIaJOkEXOo6MFE34TAkkYTbYOSNHmL5lBvVNH2r5Q0gXOo+5hVkuaXRvggkqYE+8fHlh5O0nDCUdhvT9JXa9ura0sDoFyzdkqDN9Z4npbPb6+urq31zWqTpDnVJY0yDxWs25i1N1hd0sDOoX5zQv9Q2wNLWGMGMSHMWDaHEuuIMCsK2HBWfbUGK2nEau3ZM/zkzGKzZljCLhkILZM0TNjs7Dx9ilkzvbLqCYv/uy1zqDuNUKJuYFjEmumBVRRiqrstEW2jZkINljk230MQZ9QpDexqLRLQFMSZOKxStMHe+PrWE6Lu2PCEFQ3/Fyjg0O/1cJR4rE8NrILwByzh0M36TKk/PwawioS1Q9IgO736crcxsb4+MTEzUxoULGblkgZ2DiWse3r68+zqy+1daQKxDhAWeg5lsO7W6c/f1zdvfvwqTQyCFVjShFm32USsZ1dvvo2WZhhrP4SwDT+mdZsrKIivUQyv95ywj4NQMRzEZ1ffb7+V1uMlLPBtoXsZYv15fXMbkbCwd2kGZN0mqcRv7n6N+hJ2HfZ0OHDrNrdowm7MEL9OrMMe8B/UCOtv2GFwYoklllhiiSWWWGKJJZZYYoklllhiiSXmt/8DRyJs1pdmr7YAAAAASUVORK5CYII=",
    },
    {
      id: 3,
      name: "icecream",
      quantity: 5,
      image:
        "https://static.vecteezy.com/system/resources/previews/005/112/621/original/cute-smiling-ice-cream-cone-cartoon-character-free-vector.jpg",
    },
  ]);
  const [query, setQuery] = useState("");
console.log(query)

function getFilteredProducts(){
  let filteredProducts=state;

  filteredProducts= state.filter(product=>(product.name.toLowerCase().includes(query.toLowerCase())))

  return filteredProducts

}

 

return (
    <div className="App">
      <header>
      <h2> This store has so many things</h2>
      <label>
        <input onChange={event=> {setQuery(event.target.value)}}
        placeholder="search one of the three products here">
        </input>
      </label>
      </header>

      <main>
      {getFilteredProducts().map((item) => (
        <div key={item.id}>
          <img src={item.image}></img>
          <h1>{item.name}</h1>
          <h3>Hurry up there are only {item.quantity} left</h3>
        </div>
      ))}
      </main>
    
    </div>
  );
}

export default App;
