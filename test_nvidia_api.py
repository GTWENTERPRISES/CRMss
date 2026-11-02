from openai import OpenAI  
  
client = OpenAI(  
    base_url="https://integrate.api.nvidia.com/v1",  
    api_key="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"  
)  
  
print("Iniciando prueba de conexión con NVIDIA API...")
print("Modelo: z-ai/glm-5.3-flash")
print("-" * 50)

try:
    completion = client.chat.completions.create(  
        model="z-ai/glm-5.3-flash",  
        messages=[{"role": "user", "content": "hola"}],  
        temperature=0.5,  
        top_p=1,  
        max_tokens=1024,  
        stream=True  
    )
    
    print("Respuesta del modelo:")
    print("-" * 50)
    
    for chunk in completion:
        if chunk.choices[0].delta.content is not None:
            print(chunk.choices[0].delta.content, end="", flush=True)
    
    print("\n" + "-" * 50)
    print("✓ Conexión exitosa!")
    
except Exception as e:
    print(f"✗ Error en la conexión: {type(e).__name__}")
    print(f"Detalles: {str(e)}")
