function ProfileLogo() {
  return (
    <div className="min-h-screen flex justify-center pt-[30px]">
      <div className="w-1/2 h-[300px] bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <div
          className="h-35 bg-cover bg-center"
          style={{
            backgroundImage: "url('/src/assets/bg.gif')",
          }}
        ></div>

        <div className="flex justify-start pl-[20px] -mt-12">
          <img
            src="/src/assets/avatar.gif"
            alt="avatar"
            className="w-30 h-30 rounded-full object-cover border-2 border-white shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}


export default ProfileLogo;
