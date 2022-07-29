ESX = nil
local zycko = 0
local jedzenie = 0
local picie = 0
local trybGadania = nil
local armor = 0
local powietrze = 100

Citizen.CreateThread(function()
	if ESX == nil then
		TriggerEvent('esx:getSharedObject', function(obj) ESX = obj end)
	end
end)

Citizen.CreateThread(function()
	while true do
		Citizen.Wait(10)
		local ped = GetPlayerPed(-1)
		local aa = NetworkIsPlayerTalking(PlayerId())

		if aa then
			aa = 2
		else
			aa = 1
		end

		TriggerEvent('esx_status:getStatus', 'hunger', function(status)
			jedzenie = status.val/1000000*100
		end)
		TriggerEvent('esx_status:getStatus', 'thirst', function(status)
			picie = status.val/1000000*100
		end)

		zycko = GetEntityHealth(ped)
		armor = GetPedArmour(ped)
		powietrze = math.ceil(GetPlayerUnderwaterTimeRemaining(PlayerId())) * 4

		print(armor .. "|" .. powietrze)

		SendNUIMessage({
			typ = "zmiany",
			zycie = zycko,
			jedzenie = jedzenie,
			picie = picie,
			gadaCzyNie = aa,
			tryb = trybGadania,
			arm = armor,
			oxo = powietrze
		})

		if IsPedInAnyVehicle(ped, false) then
			SendNUIMessage({
				typ = "hud",
				status = 2
			})
			Wait(1000)
			DisplayRadar(true)
		else
			Wait(500)
			DisplayRadar(false)
			SendNUIMessage({
				typ = "hud",
				status = 1
			})
		end
	end
end)

RegisterNetEvent('pma-voice:setTalkingMode')
AddEventHandler('pma-voice:setTalkingMode', function(tryb)
	trybGadania = tryb
end)